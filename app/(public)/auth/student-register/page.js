import RegisterForm from "./RegisterForm";

export const metadata = {
  title: "Apply for Study MBBS Abroad | Student Registration & Admission Form",
  description:
    "Start your MBBS Abroad journey today. Fill out the student registration form and get admission guidance from our experts",
  alternates: {
    canonical: "https://www.studymbbs.education/auth/student-register",
  },
};

export default function Page() {
  return <RegisterForm />;
}
