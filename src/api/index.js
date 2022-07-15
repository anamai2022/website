import { AuthProvider } from "./auth";
import { ContactProvider } from "./contact"
import { ProfileProvider } from "./profile"
import { HospitalProvider } from "./hospital"
import { MasterProvider } from './master'
import { QuestionnaireProvider } from './questionnaire'
import { ScoreProvider } from './score'
import { attachmentProvider } from './attachment'

export const authService = new AuthProvider();
export const contactService = new ContactProvider();
export const profileService = new ProfileProvider();
export const HospitalService = new HospitalProvider();
export const MasterService = new MasterProvider();
export const QuestionnaireService = new QuestionnaireProvider();
export const ScoreService = new ScoreProvider();
export const attachmentService = new attachmentProvider();