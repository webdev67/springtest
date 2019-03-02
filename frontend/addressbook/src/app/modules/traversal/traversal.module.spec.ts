import { TraversalModule } from './traversal.module';

describe('TraversalModule', () => {
  let traversalModule: TraversalModule;

  beforeEach(() => {
    traversalModule = new TraversalModule();
  });

  it('should create an instance', () => {
    expect(traversalModule).toBeTruthy();
  });
});
