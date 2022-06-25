import { AuthProvider } from "./auth";
import { ContactProvider } from "./contact"
import { ProfileProvider } from "./profile"
import { HospitalProvider } from "./hospital"

export const authService = new AuthProvider();
export const contactService = new ContactProvider();
export const profileService = new ProfileProvider();
export const HospitalService = new HospitalProvider();