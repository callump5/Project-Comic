describe("Validator", function() {
    describe("Check function",  function(){
        it('should check to see if both fields are valid', function(){
            expect(check(23, 38)).toBe(true);
        });
        it('should return false if a field has been left empty', function(){
            expect(check(0,76)).toBe(false);
        });
        
    describe("Report function", function(){
        it('should push valid data to an array for report', function(){
            expect(report(3,24)).toBe(2);
        });
    
        });
    });
});