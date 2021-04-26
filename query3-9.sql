SELECT Teachers.given_name, Teachers.family_name
FROM Teachers, Enrolments, Subjects
WHERE Enrolments.student_id = 'a1111113'
AND Enrolments.subject_code = Subjects.subject_code
AND Teachers.staff_id = Subjects.teacher_id
AND Subjects.faculty = "ECMS";