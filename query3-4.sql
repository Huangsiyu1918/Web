SELECT Students.given_name, Students.family_name 
FROM Students, Enrolments
WHERE Enrolments.subject_code = 'COMP SCI 2207'
AND Students.student_id = Enrolments.student_id;