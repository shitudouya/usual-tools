declare namespace usualTools {
  export function isPlainObject(obj: object): boolean;
  export function isEmpty(target: any): boolean;
  export function type(target: any): string;
  export function once(fn: () => any): any;
  export function eq(a: any, b: any): boolean;
  export function debounce(fn: () => any, wait: number): void;
  export function randomNumber(min: number, max: number): number;
  export function throttle(fn: () => any, delay: number): void;
  export function shuffle(arr: any[]): any[];
  export function countDown(time: string): object;
  export function trimAll(str: string): string;
  export function deepClone(obj: object): object;
  export function getUrlQueryObj(url: string): object;
  export function eqNaN(source: any, target: any): boolean;
  export function uuid(): string;
  export function repeat(target: string, n: number): string;
  export function toArray(arr: object): any[];
  export function curry(fn: () => any): any;
  export function getBrowser(): object;
  export function flatArray(arr: any[]): any[];
  export function pad(source:string,length:number,chars:string):string;
}
export = usualTools;
export as namespace usualTools;
