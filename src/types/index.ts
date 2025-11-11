export interface User {
    id: string;
    email: string;
    username: string;
    createdAt: Date;
}

export interface Card {
    id: string;
    collectionId: string;
    frontContent: string;
    backContent: string;
    order: number;
    createdAt: Date;
}

export interface Collection {
    id: string;
    name: string;
    description?: string;
    userId: string;
    folderId?: string;
    isPublic: boolean;
    visibility: 'search' | 'friends-only' | 'private';
    tags: string[];
    cardIds: string[];
    rating: number;
    ratingsCount: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Folder {
    id: string;
    name: string;
    userId: string;
    collectionIds: string[];
    tags: string[];
    createdAt: Date;
}

export interface Tag {
    id: string;
    name: string;
    emoji: string;
    isDefault: boolean;
    userId?: string;
}

export type CardStatus = 'known' | 'idk' | 'learning';

export interface StudyProgress {
    userId: string;
    collectionId: string;
    cardId: string;
    status: CardStatus;
    lastStudied: Date;
}