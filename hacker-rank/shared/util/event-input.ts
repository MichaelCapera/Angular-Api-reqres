<<<<<<< HEAD
export function eventInput(element: HTMLInputElement, value: any): void {
  const event = new Event('input', { bubbles: true });
  element.value = value;
  element.dispatchEvent(event);
}
=======
export function eventInput(element: HTMLInputElement, value: any): void {
  const event = new Event('input', { bubbles: true });
  element.value = value;
  element.dispatchEvent(event);
}
>>>>>>> e69c5c8bb51399f2643d6162356069c6ede5c6ac
