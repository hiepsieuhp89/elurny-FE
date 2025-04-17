type EventCallback = (data: any) => void;

class EventService {
  private listeners: { [key: string]: EventCallback[] } = {};

  emit(eventName: string, data: any) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach(callback => callback(data));
    }
  }

  on(eventName: string, callback: EventCallback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  off(eventName: string, callback: EventCallback) {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName].filter(
        cb => cb !== callback
      );
    }
  }
}

export const eventService = new EventService(); 