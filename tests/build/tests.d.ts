declare var Category: typeof WebAtoms.Unit.Category;
declare var Test: typeof WebAtoms.Unit.Test;
declare var Assert: typeof WebAtoms.Unit.Assert;
declare var TestItem: typeof WebAtoms.Unit.TestItem;
declare var MockWindowService: typeof WebAtoms.MockWindowService;
/**
 *
 *
 * @class WindowTests
 * @extends {TestItem}
 */
declare class WindowTests extends TestItem {
    constructor();
    dispose(): Promise<any>;
    /**
     * This task verifies every possibility of Window
     *
     * @memberof WindowTests
     */
    newTask(): Promise<void>;
    taskList(): Promise<void>;
}
