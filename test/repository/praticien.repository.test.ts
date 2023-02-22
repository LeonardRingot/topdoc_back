import { PraticienRepository } from "~~/repository/praticien.repository";
describe('PraticienRepository', () => {
    let praticienRepository: PraticienRepository;
  
    beforeAll(() => {
      praticienRepository = new PraticienRepository();
    });
    describe('findById', () => {
        it('should return a praticienDTO when a praticien with the given id is found', async () => {
          // Arrange
          const id = 1;
    
          // Act
          const result = await praticienRepository.findById(id);
    
          // Assert
          expect(result).toBeDefined();
          expect(result).toHaveProperty('UserId', id);
          expect(result).toHaveProperty('firstname');
          expect(result).toHaveProperty('lastname');
          expect(result).toHaveProperty('email');
          expect(result).toHaveProperty('birthday');
          expect(result).toHaveProperty('phone');
          expect(result).toHaveProperty('isActif');
          expect(result).toHaveProperty('address');
          expect(result).toHaveProperty('zipCode');
          expect(result).toHaveProperty('city');
          expect(result).toHaveProperty('role_nom');
        });
    
        it('should return null when no praticien with the given id is found', async () => {
          // Arrange
          const id = -1;
    
          // Act
          const result = await praticienRepository.findById(id);
    
          // Assert
          expect(result).toBeNull();
        });
      });
})