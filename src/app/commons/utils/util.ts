import { Subscription } from 'rxjs';

export function isNullOrUndefined(object: any): boolean {
  return object === null || object === undefined;
}

export function isNullOrUndefinedOrEmpty(value: string): boolean {
  return isNullOrUndefined(value) || value === '';
}

export function removeSubscriptions(subscriptions: Subscription[]): void {
  subscriptions
    .filter((subscription: Subscription) => !!subscription)
    .forEach((subscription: Subscription) => subscription.unsubscribe());
}
