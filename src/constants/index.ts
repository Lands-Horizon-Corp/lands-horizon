import { getEnvVar } from "@/lib/utils"

export const APP_NAME = getEnvVar("APP_NAME", "Default App Name")
