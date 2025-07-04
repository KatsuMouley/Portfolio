export interface AppConfig {
  id: string;
  name: string;
  initialPosition: {
    x: number;
    y: number;
  };
}

export interface OpenApp extends AppConfig {
  zIndex: number;
}
