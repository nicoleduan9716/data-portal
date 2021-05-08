/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * Service handling environment-related functionality.
 */

// App dependencies
import {EnvironmentUrl} from "./environment-url.model";

// Template variables
const GATSBY_ENV = process.env.GATSBY_ENV;

/**
 * Return the name of the current environment
 */
export function getCurrentEnvironment() {

    return GATSBY_ENV;
}

/**
 * Returns the current environment's url.
 */
export function getCurrentEnvironmentURL() {

    const currentEnvironment = getCurrentEnvironment().toUpperCase();

    return EnvironmentUrl[currentEnvironment];
}

/**
 * Returns the default catalog for the current environment.
 * 
 * @returns {string}
 */
export function getDefaultCatalog() {

    return process.env.GATSBY_DEFAULT_CATALOG;
}

/**
 * Returns true if the current environment is local.
 */
export function isLocal() {

    return GATSBY_ENV === "LOCAL";
}

/**
 * Returns true if the current environment is production.
 */
export function isProd() {

    return GATSBY_ENV === "PROD";
}

/**
 * Returns true if the current environment is staging.
 */
export function isStaging() {

    return GATSBY_ENV === "STAGING";
}

/**
 * Returns true if the current environment is either local or staging.
 */
export function isTestEnvironment() {

    return isLocal() || isStaging();
}
