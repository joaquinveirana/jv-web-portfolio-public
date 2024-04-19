"use server";

import { getDbBadges, getDbCertificates, getFileStorageURL } from "../firebase/firebase";

export async function selectAllBadgesAction() {
  return getDbBadges();
}

export async function selectAllCertificatesAction() {
  return getDbCertificates();
}

export async function getImageAction(file: string) {
  return getFileStorageURL(file);
}
