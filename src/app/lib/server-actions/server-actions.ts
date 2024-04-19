"use server";

import { getDbBadges, getDbCertificates } from "../firebase/firebase";

export async function selectAllBadgesAction() {
  return getDbBadges();
}

export async function selectAllCertificatesAction() {
  return getDbCertificates();
}
