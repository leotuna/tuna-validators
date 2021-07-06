import { PhonePrefixes } from "./enums/phonePrefixes";

class IsValid {
  cpf(value: string) {
    let sum;
    let rest;
    sum = 0;

    value = value.replace(/\D/g, '');

    for (let i = 0; i <= 9; i++) {
      if (value == i.toString().repeat(11)) {
        return false;
      }
    }

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(value.substring(i - 1, i)) * (11 - i);
    }

    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }

    if (rest != parseInt(value.substring(9, 10))) {
      return false;
    }

    sum = 0;

    for (let i = 1; i <= 10; i++) {
      sum += parseInt(value.substring(i - 1, i)) * (12 - i);
    }

    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }

    if (rest != parseInt(value.substring(10, 11))) {
      return false;
    }

    return true;
  }

  cnpj(value: string) {
    if (!value) return false

    const validTypes =
      typeof value === 'string' || Number.isInteger(value) || Array.isArray(value)
  
    if (!validTypes) return false
  
    const match = value.toString().match(/\d/g)
    const numbers = Array.isArray(match) ? match.map(Number) : []
  
    if (numbers.length !== 14) return false
    
    const items = [...new Set(numbers)]
    if (items.length === 1) return false
  
    const calc = (x: any) => {
      const slice = numbers.slice(0, x)
      let factor = x - 7
      let sum = 0
  
      for (let i = x; i >= 1; i--) {
        const n = slice[x - i]
        sum += n * factor--
        if (factor < 2) factor = 9
      }
  
      const result = 11 - (sum % 11)
  
      return result > 9 ? 0 : result
    }
  
    const digits = numbers.slice(12)
    
    const digit0 = calc(12)
    if (digit0 !== digits[0]) return false
  
    const digit1 = calc(13)
    return digit1 === digits[1]
  }

  phone(value: string, country: PhonePrefixes) {
    throw new Error("Phone validation not implemented for this country yet.")
  }

  fullName(value: string) {
    if (value.length < 1) {
      return false
    }
    if (value.length > 60) {
      return false
    }
    if (!value.includes(" ")) {
      return false
    }
    if (!(/[[ ]|\p{L}*]+$/.test(value))) {
      return false
    }
    if (value.split(" ").filter((x) => x !== "").length < 2) {
      return false
    }
    return true
  }

  nomeFantasia(value: string) {
    if (value.length < 1) {
      return false
    }
    if (value.length > 60) {
      return false
    }
    return true
  }

  razaoSocial(value: string) {
    if (value.length < 1) {
      return false
    }
    if (value.length > 60) {
      return false
    }
    return true
  }
}

export const isValid = new IsValid();
