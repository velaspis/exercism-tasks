
export function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake;
    }
    export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    
      return   (knightIsAwake)||(archerIsAwake)||(prisonerIsAwake);
    }
    
    export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
      return (!archerIsAwake)&&(prisonerIsAwake);
    }
    export function canFreePrisoner(
      knightIsAwake,
      archerIsAwake,
      prisonerIsAwake,
      petDogIsPresent
    ) {
      console.log((prisonerIsAwake && !archerIsAwake && !knightIsAwake && !petDogIsPresent) || (petDogIsPresent && !archerIsAwake));
    return (prisonerIsAwake && !archerIsAwake && !knightIsAwake && !petDogIsPresent) || (petDogIsPresent && !archerIsAwake)
    
    }
    