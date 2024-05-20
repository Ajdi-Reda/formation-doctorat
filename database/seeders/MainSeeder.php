<?php

namespace Database\Seeders;

use App\Enums\RolesEnum;
use App\Models\Professor;
use App\Models\University;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class MainSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        app(Role::class)->findOrCreate(RolesEnum::CANDIDATE->value, 'web');
        app(Role::class)->findOrCreate(RolesEnum::PROFESSOR->value, 'web');
        app(Role::class)->findOrCreate(RolesEnum::SUPERADMIN->value, 'web');
        DB::statement("
        INSERT INTO universities (name, address, chancellor, chancellorEmail, chancellorPhoneNumber, created_at, updated_at)
        VALUES
            ('Harvard University', 'Cambridge, MA', 'John Harvard', 'john.harvard@example.com', '123-456-7890', NOW(), NOW()),
            ('Stanford University', 'Stanford, CA', 'Jane Stanford', 'jane.stanford@example.com', '123-456-7890', NOW(), NOW()),
            ('MIT', 'Cambridge, MA', 'L. Rafael Reif', 'rafael.reif@mit.edu', '123-456-7890', NOW(), NOW()),
            ('Oxford University', 'Oxford, UK', 'Louise Richardson', 'louise.richardson@ox.ac.uk', '123-456-7890', NOW(), NOW()),
            ('ETH Zurich', 'Zurich, Switzerland', 'Joel Mesot', 'joel.mesot@ethz.ch', '123-456-7890', NOW(), NOW()),
            ('University of Tokyo', 'Tokyo, Japan', 'Makoto Gonokami', 'makoto.gonokami@u-tokyo.ac.jp', '123-456-7890', NOW(), NOW()),
            ('National University of Singapore', 'Singapore', 'Tan Eng Chye', 'engchye.tan@nus.edu.sg', '123-456-7890', NOW(), NOW()),
            ('University of Toronto', 'Toronto, Canada', 'Meric Gertler', 'meric.gertler@utoronto.ca', '123-456-7890', NOW(), NOW()),
            ('Peking University', 'Beijing, China', 'Qiu Yong', 'qiuyong@pku.edu.cn', '123-456-7890', NOW(), NOW()),
            ('University of Melbourne', 'Melbourne, Australia', 'Duncan Maskell', 'duncan.maskell@unimelb.edu.au', '123-456-7890', NOW(), NOW())
    ");

        // Get all university IDs
        $universityIds = University::pluck('id')->toArray();

        for ($i = 0; $i < 5; $i++) {
            $user = User::create([
                'name' => "user_$i",
                'email' => "user_$i@prof.com",
                'password' => bcrypt("user_$i.password"),
            ]);

            $professor = new Professor([
                'user_id' => $user->id,
                'university_id' => $universityIds[array_rand($universityIds)], // Assign a random university
                'firstName' => "John",
                'lastName' => "Doe_$i",
                'phoneNumber' => "06837923",
            ]);
            $professor->save();
            $user->assignRole('professor');
        }
        $user = User::create([
            'name' => "admin",
            'email' => "superadmin@gmail.com",
            'password' => bcrypt("superadmin"),
        ]);

        $user->assignRole(RolesEnum::SUPERADMIN);


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
        INSERT INTO fields (name, description, created_at, updated_at)
        VALUES
            ('Software Engineering', 'Advanced software development', NOW(), NOW()),
            ('Network Security', 'Securing computer networks', NOW(), NOW()),
            ('Finance', 'Financial studies within business administration', NOW(), NOW()),
            ('Marketing', 'Strategic marketing and advertising', NOW(), NOW()),
            ('Power Systems', 'Study of electrical power systems', NOW(), NOW()),
            ('Telecommunications', 'Communication systems engineering', NOW(), NOW()),
            ('Quantum Physics', 'Study of quantum phenomena', NOW(), NOW()),
            ('Astrophysics', 'Study of celestial bodies and the universe', NOW(), NOW()),
            ('Organic Chemistry', 'Study of organic compounds', NOW(), NOW()),
            ('Inorganic Chemistry', 'Study of inorganic compounds', NOW(), NOW())
    ");


        // ProgramUniversity Seeder
        DB::statement("
        INSERT INTO program_university (program_id, university_id, created_at, updated_at)
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


        DB::statement(
            "
            INSERT INTO thesis_proposals (professor_id, field_id, title, description, created_at, updated_at)
VALUES
    (1, 1, 'Advanced Software Development Practices', 'Investigating the latest practices in software engineering for advanced development.', NOW(), NOW()),
    (2, 1, 'Secure Coding Techniques', 'Exploring secure coding techniques and best practices in software engineering.', NOW(), NOW()),
    (3, 1, 'Agile Software Development', 'Studying the principles and applications of agile software development methodologies.', NOW(), NOW()),
    (4, 1, 'Machine Learning in Software Engineering', 'Investigating the applications of machine learning in software engineering processes.', NOW(), NOW()),
    (5, 1, 'Human-Computer Interaction', 'Exploring the impact of human-computer interaction on software development.', NOW(), NOW()),

    (1, 2, 'Network Security Protocols', 'Researching and evaluating network security protocols for robust cybersecurity measures.', NOW(), NOW()),
    (2, 2, 'Intrusion Detection Systems', 'Analyzing and enhancing intrusion detection systems for network security.', NOW(), NOW()),
    (3, 2, 'Wireless Network Security', 'Investigating security challenges and solutions in wireless network environments.', NOW(), NOW()),
    (4, 2, 'Blockchain for Network Security', 'Exploring the integration of blockchain technology for enhancing network security.', NOW(), NOW()),
    (5, 2, 'Cloud Security Practices', 'Studying security practices in cloud computing environments for network protection.', NOW(), NOW()),

    (1, 3, 'Financial Modeling and Analysis', 'Examining advanced financial modeling techniques for strategic decision-making.', NOW(), NOW()),
    (2, 3, 'Risk Management in Finance', 'Analyzing risk management strategies and methodologies in the field of finance.', NOW(), NOW()),
    (3, 3, 'Financial Markets and Investments', 'Investigating trends and opportunities in financial markets and investment strategies.', NOW(), NOW()),
    (4, 3, 'Sustainable Finance Practices', 'Exploring sustainable finance practices and their impact on business and society.', NOW(), NOW()),
    (5, 3, 'Behavioral Finance Studies', 'Studying the psychological aspects influencing financial decision-making and market behavior.', NOW(), NOW()),

    (1, 4, 'Digital Marketing Strategies', 'Analyzing and optimizing digital marketing strategies for business growth.', NOW(), NOW()),
    (2, 4, 'Consumer Behavior in Marketing', 'Investigating the psychological factors influencing consumer behavior and decision-making.', NOW(), NOW()),
    (3, 4, 'Brand Management Practices', 'Examining effective brand management practices for building and maintaining brand equity.', NOW(), NOW()),
    (4, 4, 'Social Media Marketing Trends', 'Exploring emerging trends and strategies in social media marketing for effective brand communication.', NOW(), NOW()),
    (5, 4, 'Global Marketing Strategies', 'Studying international marketing strategies for expanding businesses in the global market.', NOW(), NOW()),

    (1, 5, 'Smart Grid Technologies', 'Researching and implementing smart grid technologies for efficient power distribution.', NOW(), NOW()),
    (2, 5, 'Renewable Energy Integration', 'Analyzing and optimizing the integration of renewable energy sources into power systems.', NOW(), NOW()),
    (3, 5, 'Power System Stability Studies', 'Investigating stability challenges and solutions in modern power systems.', NOW(), NOW()),
    (4, 5, 'Energy Storage Solutions', 'Exploring advanced energy storage solutions for enhancing power system reliability.', NOW(), NOW()),
    (5, 5, 'Grid Resilience in Power Systems', 'Studying strategies for enhancing grid resilience in power systems against various challenges.', NOW(), NOW());"
        );
    }
}
