// 1. Newton Second Law

SET 'm' to 600 
SET 'a' to 2 
GET 'F' without any value 

CALCULATE 'm' times 'a'

SET 'F' value with calculate result 
DISPLAY 'F' 


// 2. Tahun Kabisat

GET 'year' with any value

IF 'year' mod 4 equals to 0 THEN
  IF 'year' mod 100 equals to 0 THEN
    IF 'year' mod 400 equals to 0 THEN
      DISPLAY 'year' is leap year
    ELSE 
      DISPLAY 'year' is not leap year
  ELSE
    DISPLAY 'year' is leap year 
ELSE 
  DISPLAY 'year' is not leap year
END IF


// 3. Laundry Day

SET 'clothes' to 20
SET 'washingMachine' to 0

WHILE 'washingMachine' is less than 'clothes' 
  ADD 'washingMachine' by 1
END WHILE


// 4. Periksa Kuku

SET 'studentCount' to 0

WHILE 'studentCount' is less than 40
  ADD 'studentCount' by 1
  IF student's nails is long THEN
    teacher punish the student
  ELSE
    teacher praise the student
  END IF 
END WHILE
