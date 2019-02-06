import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { PlatformAppsService, EAppPageSlot } from 'services/platform-apps';
import { Inject } from 'util/injector';
import electron from 'electron';
import Utils from 'services/utils';

@Component({})
export default class PlatformAppPageView extends Vue {
  @Inject() platformAppsService: PlatformAppsService;
  @Prop() appId: string;
  @Prop() pageSlot: EAppPageSlot;

  $refs: {
    appContainer: HTMLDivElement;
  };

  resizeInterval: number;

  containerId: number;

  mounted() {
    this.containerId = this.platformAppsService.mountConatiner(
      this.appId,
      this.pageSlot,
      electron.remote.getCurrentWindow().id,
      Utils.getWindowId(),
    );
    this.checkResize();

    this.resizeInterval = window.setInterval(() => {
      this.checkResize();
    }, 100); // TODO: Is this too fast?
  }

  destroyed() {
    if (this.resizeInterval) clearInterval(this.resizeInterval);
    this.platformAppsService.unmountContainer(
      this.containerId,
      electron.remote.getCurrentWindow().id,
    );
  }

  currentPosition: IVec2;
  currentSize: IVec2;

  checkResize() {
    const rect = this.$refs.appContainer.getBoundingClientRect();

    if (
      this.currentPosition == null ||
      this.currentSize == null ||
      rect.left !== this.currentPosition.x ||
      rect.top !== this.currentPosition.y ||
      rect.width !== this.currentSize.x ||
      rect.height !== this.currentSize.y
    ) {
      this.currentPosition = { x: rect.left, y: rect.top };
      this.currentSize = { x: rect.width, y: rect.height };

      this.platformAppsService.setContainerBounds(
        this.containerId,
        this.currentPosition,
        this.currentSize,
      );
    }
  }
}