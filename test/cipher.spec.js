// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });


/*Mis propias pruebas:

    it('should return "BCDEFGHIJKLMNOPQRSTUVWXYZA" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 1', () => {
      expect(cipher.encode(1, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('BCDEFGHIJKLMNOPQRSTUVWXYZA');

      it('should return "CDEFGHIJKLMNOPQRSTUVWXYZAB" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 2', () => {
        expect(cipher.encode(2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('CDEFGHIJKLMNOPQRSTUVWXYZAB');

  /*  encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 7);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 9);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 10);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 11);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 12);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 13);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 14);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 15);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 17);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 18);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 19);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 20);
    encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 21);

    encode("TEQUIEROMUCHOTAVO", 33);

    decode("BCDEFGHIJKLMNOPQRSTUVWXYZA", 1);
    decode("CDEFGHIJKLMNOPQRSTUVWXYZAB", 2);
    decode("DEFGHIJKLMNOPQRSTUVWXYZABC", 3);
    decode("EFGHIJKLMNOPQRSTUVWXYZABCD", 4);
    decode("FGHIJKLMNOPQRSTUVWXYZABCDE", 5);
    decode("GHIJKLMNOPQRSTUVWXYZABCDEF", 6);
    decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 7);
    decode("IJKLMNOPQRSTUVWXYZABCDEFGH", 8);
    decode("JKLMNOPQRSTUVWXYZABCDEFGHI", 9);
    decode("KLMNOPQRSTUVWXYZABCDEFGHIJ", 10);
    decode("LMNOPQRSTUVWXYZABCDEFGHIJK", 11);
    decode("MNOPQRSTUVWXYZABCDEFGHIJKL", 12);
    decode("NOPQRSTUVWXYZABCDEFGHIJKLM", 13);
    decode("OPQRSTUVWXYZABCDEFGHIJKLMN", 14);
    decode("PQRSTUVWXYZABCDEFGHIJKLMNO", 15);
    decode("QRSTUVWXYZABCDEFGHIJKLMNOP", 16);
    decode("RSTUVWXYZABCDEFGHIJKLMNOPQ", 17);
    decode("STUVWXYZABCDEFGHIJKLMNOPQR", 18);
    decode("TUVWXYZABCDEFGHIJKLMNOPQRS", 19);
    decode("UVWXYZABCDEFGHIJKLMNOPQRST", 20);
    decode("VWXYZABCDEFGHIJKLMNOPQRSTU", 21);

    decode("ALXBPLYVTBJOVAHCV", 33)
*/

    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    // it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
    //   expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    // });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    // it('should return " !@" for " !@"', () => {
    //   expect(cipher.encode(33, ' !@')).toBe(' !@');
    // });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    // it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
    //   expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    // });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    // it('should return " !@" para " !@"', () => {
    //   expect(cipher.decode(33, ' !@')).toBe(' !@');
    // });
  });

});
