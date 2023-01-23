export const EXPECTED_MINUTES_IN_OVEN =40;
export function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

export function preparationTimeInMinutes(number) {
    return number * 2;
}
export function totalTimeInMinutes(number, actualMinutesInOven) {
    return preparationTimeInMinutes(number) + actualMinutesInOven;
}