export type App = {
    name: string;
    title: string;
    start: number;
    end: number | null;
    duration: number;
    screenshot: string;
    icon: string;
}

export type Session = {
    id: string;
    start: number;
    end: number | null;
    duration: number;
    classification: string;
    apps: App[];
}