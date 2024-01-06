<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MainSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         DB::statement("
            INSERT INTO universities (name, address, Chancellor, ChancellorEmail, created_at, updated_at)
            VALUES
                ('Harvard University', 'Cambridge, MA', 'John Harvard', 'john.harvard@example.com', NOW(), NOW()),
                ('Stanford University', 'Stanford, CA', 'Jane Stanford', 'jane.stanford@example.com', NOW(), NOW()),
                ('MIT', 'Cambridge, MA', 'L. Rafael Reif', 'rafael.reif@mit.edu', NOW(), NOW()),
                ('Oxford University', 'Oxford, UK', 'Louise Richardson', 'louise.richardson@ox.ac.uk', NOW(), NOW()),
                ('ETH Zurich', 'Zurich, Switzerland', 'Joel Mesot', 'joel.mesot@ethz.ch', NOW(), NOW()),
                ('University of Tokyo', 'Tokyo, Japan', 'Makoto Gonokami', 'makoto.gonokami@u-tokyo.ac.jp', NOW(), NOW()),
                ('National University of Singapore', 'Singapore', 'Tan Eng Chye', 'engchye.tan@nus.edu.sg', NOW(), NOW()),
                ('University of Toronto', 'Toronto, Canada', 'Meric Gertler', 'meric.gertler@utoronto.ca', NOW(), NOW()),
                ('Peking University', 'Beijing, China', 'Qiu Yong', 'qiuyong@pku.edu.cn', NOW(), NOW()),
                ('University of Melbourne', 'Melbourne, Australia', 'Duncan Maskell', 'duncan.maskell@unimelb.edu.au', NOW(), NOW())
        ");

        // Program Seeder
        DB::statement("
            INSERT INTO programs (title, description, startDate, endDate, responsible, status, icon, created_at, updated_at)
            VALUES
   ('Computer Science', 'Cutting-edge CS program', '2024-01-15', '2024-06-15', 'Dr. Smith', 'Active', NULL, NOW(), NOW()),
    ('Business Administration', 'Top-rated MBA program', '2024-02-01', '2024-07-01', 'Prof. Johnson', 'Active', NULL, NOW(), NOW()),
    ('Electrical Engineering', 'Innovative EE program', '2024-03-01', '2024-08-01', 'Dr. Rodriguez', 'Active', NULL, NOW(), NOW()),
    ('Physics', 'Advanced physics research program', '2024-04-01', '2024-09-01', 'Prof. Williams', 'Inactive', NULL, NOW(), NOW()),
    ('Chemistry', 'Chemical sciences program', '2024-05-01', '2024-10-01', 'Dr. Brown', 'Active', NULL, NOW(), NOW()),
    ('Medicine', 'Medical studies program', '2024-06-01', '2024-11-01', 'Dr. Johnson', 'Active', NULL, NOW(), NOW()),
    ('Environmental Science', 'Sustainability program', '2024-07-01', '2024-12-01', 'Prof. Davis', 'Active', NULL, NOW(), NOW()),
    ('Economics', 'Economic studies program', '2024-08-01', '2025-01-01', 'Dr. Wilson', 'Inactive', NULL, NOW(), NOW()),
    ('Mathematics', 'Mathematical sciences program', '2024-09-01', '2025-02-01', 'Prof. Garcia', 'Active', NULL, NOW(), NOW()),
    ('History', 'Historical studies program', '2024-10-01', '2025-03-01', 'Dr. Taylor', 'Active', NULL, NOW(), NOW());");

        // Field Seeder
        DB::statement("
            INSERT INTO fields (program_id, name, description, created_at, updated_at)
            VALUES
                (1, 'Software Engineering', 'Advanced software development', NOW(), NOW()),
                (1, 'Network Security', 'Securing computer networks', NOW(), NOW()),
                (2, 'Finance', 'Financial studies within business administration', NOW(), NOW()),
                (2, 'Marketing', 'Strategic marketing and advertising', NOW(), NOW()),
                (3, 'Power Systems', 'Study of electrical power systems', NOW(), NOW()),
                (3, 'Telecommunications', 'Communication systems engineering', NOW(), NOW()),
                (4, 'Quantum Physics', 'Study of quantum phenomena', NOW(), NOW()),
                (4, 'Astrophysics', 'Study of celestial bodies and the universe', NOW(), NOW()),
                (5, 'Organic Chemistry', 'Study of organic compounds', NOW(), NOW()),
                (5, 'Inorganic Chemistry', 'Study of inorganic compounds', NOW(), NOW())
        ");

        // ProgramUniversity Seeder
        DB::statement("
            INSERT INTO program_universities (program_id, university_id, created_at, updated_at)
            VALUES
                (1, 1, NOW(), NOW()),
                (2, 2, NOW(), NOW()),
                (3, 3, NOW(), NOW()),
                (4, 4, NOW(), NOW()),
                (5, 5, NOW(), NOW()),
                (6, 6, NOW(), NOW()),
                (7, 7, NOW(), NOW()),
                (8, 8, NOW(), NOW()),
                (9, 9, NOW(), NOW()),
                (10, 10, NOW(), NOW())
        ");

        // FieldProgramUniversity Seeder
        DB::statement("
            INSERT INTO field_program_university (program_university_id, field_id, created_at, updated_at)
            VALUES
                (1, 1, NOW(), NOW()),
                (1, 2, NOW(), NOW()),
                (2, 3, NOW(), NOW()),
                (2, 4, NOW(), NOW()),
                (3, 5, NOW(), NOW()),
                (3, 6, NOW(), NOW()),
                (4, 7, NOW(), NOW()),
                (4, 8, NOW(), NOW()),
                (5, 9, NOW(), NOW()),
                (5, 10, NOW(), NOW())
        ");
    }
}
