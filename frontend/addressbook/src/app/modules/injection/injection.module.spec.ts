import { InjectionModule } from './injection.module';

describe('InjectionModule', () => {
  let injectionModule: InjectionModule;

  beforeEach(() => {
    injectionModule = new InjectionModule();
  });

  it('should create an instance', () => {
    expect(injectionModule).toBeTruthy();
  });
});
