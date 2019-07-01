// 1. Newton Second Law

GET 'm' with any value 
GET 'a' with any value 
GET 'F' without any value 

CALCULATE 'm' times 'a'

SET 'F' value with calculate result 
DISPLAY 'F' 


// 2. Tahun Kabisat

GET 'year' with any value

IF 'year' mod 4 equals to 0 
  DO IF 'year' mod 100 equals to 0 
    DO IF 'year' mod 400 equals to 0 
      DISPLAY 'year' is leap year
    ELSE 
      DISPLAY 'year' is not leap year
  ELSE
    DISPLAY 'year' is leap year 
ELSE 
  DISPLAY 'year' is not leap year


// 3. Laundry Day
GET 'clothes' with 20

WHILE 'clothes' <= 20