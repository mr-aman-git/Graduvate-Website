import StudentLogin from "./StudentLogin"

export const metadata = {
  title: "Student Login | Access Your MBBS Abroad Admission Dashboard",
  description: "Login to your account to track MBBS abroad admission status, manage application, and get updates from top medical Universities",
  alternates: {
    canonical: "https://www.studymbbs.education/auth/student-login",
  },
};

export default function Page() {
  return <StudentLogin />;
}
