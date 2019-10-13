/**
 * Extends the DOM event object to prevent name-clashes
 * with frameworks that have their own 'Event' (i.e. Stencil, Angular, etc.)
 */
export class BrowserEvent extends Event { }

