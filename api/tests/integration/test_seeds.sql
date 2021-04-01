TRUNCATE posts RESTART IDENTITY;

INSERT INTO posts (name, title, date, body)
VALUES
(
    'test 1', 'Wheel', '10000BC', 'Ug make wheel, it wheely good'
),
(
    'test 2', 'Telegraph', '30/03/2021', 'DO NOT PLAY AROUND WITH TELEGRAPH'
),
(
    'test 3', 'Our American Cousin', '15/04/1865', 'This play is boring, might leave soon.'
);
