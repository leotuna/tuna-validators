class StringHas {
  lower(value: string) {
    return /[a-z]/.test(value);
  }
  
  upper(value: string) {
    return /[A-Z]/.test(value);
  }

  number(value: string) {
    return /\d+/g.test(value);
  }
}

export const stringHas = new StringHas();
