import { test, useSpectron } from '../helpers/spectron/index';
import { addSource } from '../helpers/spectron/sources';
import { logIn, blankSlate } from '../helpers/spectron/user';
import { FormMonkey } from '../helpers/form-monkey';
import { waitForWidgetSettingsSync } from '../helpers/widget-helpers';

useSpectron({ appArgs: '--nosync' });

let i = 0;

test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});
test('Stream Boss Manage Battle settings' + i, async t => {
  const client = t.context.app.client;
  if (!(await logIn(t))) return;
  await addSource(t, 'Stream Boss', '__Stream Boss', false);

  await client.click('li=Manage Battle');

  const formMonkey = new FormMonkey(t);

  const testSet1 = {
    boss_heal: false,
    fade_time: 5,
    skin: 'noimg',
    follow_multiplier: 1,
    bit_multiplier: 2,
    sub_multiplier: 3,
    donation_multiplier: 4,
  };

  await formMonkey.fill('manage-battle-form', testSet1);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet1));

  const testSet2 = {
    boss_heal: true,
    fade_time: 10,
    skin: 'default',
    follow_multiplier: 5,
    bit_multiplier: 1,
    sub_multiplier: 300,
    donation_multiplier: 200,
  };

  await formMonkey.fill('manage-battle-form', testSet2);
  await waitForWidgetSettingsSync(t);
  t.true(await formMonkey.includes('manage-battle-form', testSet2));
});