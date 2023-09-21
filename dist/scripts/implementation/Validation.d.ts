import Rule from './Rule';
export interface RuleIndex {
    [index: string]: Rule<any>;
}
export default class Validation {
    parent: any;
    ruleIndex: RuleIndex;
    rules: Rule<any>[];
    constructor(parent?: any);
    static attachGraph(obj: any): Validation;
    static createProperty<T>(obj: any, property: string, rule: Rule<T>): void;
    static createRule<T>(obj: any, property: string, rule: Rule<T>): void;
    static addRule<T>(obj: any, property: string, rule: Rule<T>): void;
}
