SELECT given_name, family_name, mark
FROM Students, Enrolments
WHERE Enrolments.subject_code = 'COMP SCI 2000'
AND Enrolments.mark < 50
AND Students.student_id = Enrolments.student_id;