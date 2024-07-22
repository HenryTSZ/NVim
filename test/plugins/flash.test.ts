import { Configuration } from '../testConfiguration';
import { newTest, newTestOnly } from '../testSimplifier';
import { cleanUpWorkspace, setupWorkspace } from '../testUtils';

suite('flash plugin', () => {
  suiteSetup(async () => {
    const configuration = new Configuration();
    configuration.flash.enable = true;

    await setupWorkspace(configuration);
  });
  suiteTeardown(cleanUpWorkspace);

  newTestOnly({
    title: 'f + the character to search for + the marker label',
    start: ['|the flash', 'the flash', 'the flash'],
    keysPressed: 'fhh',
    end: ['t|he flash', 'the flash', 'the flash'],
  });

  newTestOnly({
    title: 'displaying the currently typed search character in the statusBar',
    start: ['|the flash', 'the flash', 'the flash'],
    keysPressed: 'fflash',
    end: ['|the flash', 'the flash', 'the flash'],
    statusBar: 'flash:flash|',
  });

  newTestOnly({
    title: 'logging jump points',
    start: ['|the flash', 'the flash', 'the flash'],
    keysPressed: 'fhf' + '<C-o>',
    end: ['|the flash', 'the flash', 'the flash'],
  });

  newTestOnly({
    title: 'with d operator',
    start: ['|the flash', 'the flash', 'the flash'],
    keysPressed: 'dffh',
    end: ['|lash', 'the flash', 'the flash'],
  });

  newTestOnly({
    title: 'with y operator',
    start: ['|the flash', 'the flash', 'the flash'],
    keysPressed: 'yfhk$p',
    end: ['the flashthe flas|h', 'the flash', 'the flash'],
  });

  newTestOnly({
    title: 'carriage returns to jump to the next marker',
    start: ['|the flash', 'the flash', 'the flash'],
    keysPressed: 'fh\n',
    end: ['t|he flash', 'the flash', 'the flash'],
  });

  newTestOnly({
    title: 'last search',
    start: ['|the flash', 'the flash', 'the flash'],
    keysPressed: 'fhhf\n\n',
    end: ['the flas|h', 'the flash', 'the flash'],
  });

  newTestOnly({
    title: 'no last search',
    start: ['|the flash', 'the flash', 'the flash'],
    keysPressed: 'f\n',
    end: ['|the flash', 'the flash', 'the flash'],
    statusBar: 'E888: No last search',
  });

  newTestOnly({
    title:
      'ignorecase = true, the case of the label is different from that of the next search character',
    start: ['|the flash', 'thH flash', 'the flash'],
    keysPressed: 'fhhy',
    end: ['the flash', 't|hH flash', 'the flash'],
  });
});
