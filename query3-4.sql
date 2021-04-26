SELECT Students.given_name, Students.family_name 
FROM Students, Subjects
WHERE Subjects.subject_code = 'COMP SCI 2207';