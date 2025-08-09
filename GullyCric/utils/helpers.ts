// This file contains helper functions used throughout the application.

export const formatPlayerName = (name: string): string => {
    return name.trim().toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
};

export const calculateBattingAverage = (runs: number, innings: number): number => {
    return innings > 0 ? parseFloat((runs / innings).toFixed(2)) : 0;
};

export const isValidPlayerType = (type: string): boolean => {
    const validTypes = ["batsman", "bowler", "allrounder"];
    return validTypes.includes(type);
};

export const generateMatchId = (): string => {
    return `match_${Date.now()}`;
};