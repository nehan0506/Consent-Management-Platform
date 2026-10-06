module.exports = [
"[project]/.next-internal/server/app/cms/api/v1/consents/start-access/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/constants/api.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ /**
 * API Constants
 * All API-related constants including error codes and API key configuration
 */ /**
 * Standard API error codes
 */ __turbopack_context__.s([
    "API_ERROR_CODES",
    ()=>API_ERROR_CODES,
    "API_KEY_CONFIG",
    ()=>API_KEY_CONFIG,
    "API_KEY_PREFIX",
    ()=>API_KEY_PREFIX
]);
const API_ERROR_CODES = {
    UNAUTHORIZED: "UNAUTHORIZED",
    FORBIDDEN: "FORBIDDEN",
    NOT_FOUND: "NOT_FOUND",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    INTERNAL_ERROR: "INTERNAL_ERROR",
    RATE_LIMIT_EXCEEDED: "RATE_LIMIT_EXCEEDED",
    INVALID_API_KEY: "INVALID_API_KEY",
    INACTIVE_API_KEY: "INACTIVE_API_KEY"
};
const API_KEY_PREFIX = "pk_";
const API_KEY_CONFIG = {
    PREFIX: API_KEY_PREFIX,
    RANDOM_BYTES: 32,
    RANDOM_LENGTH: 48,
    DISPLAY_PREFIX_LENGTH: 8
};
}),
"[project]/lib/api-errors.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "ApiErrors",
    ()=>ApiErrors,
    "createErrorResponse",
    ()=>createErrorResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/api.ts [app-route] (ecmascript)");
;
;
;
class ApiError extends Error {
    statusCode;
    code;
    details;
    constructor(statusCode, code, message, details){
        super(message), this.statusCode = statusCode, this.code = code, this.details = details;
        this.name = "ApiError";
    }
}
function createErrorResponse(statusCode, code, message, details) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        error: {
            code,
            message,
            ...details && {
                details
            }
        }
    }, {
        status: statusCode
    });
}
const ApiErrors = {
    unauthorized: (message = "Missing or invalid API key")=>createErrorResponse(401, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].UNAUTHORIZED, message),
    invalidApiKey: (message = "Invalid API key format or value")=>createErrorResponse(401, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].INVALID_API_KEY, message),
    inactiveApiKey: (message = "API key has been disabled")=>createErrorResponse(403, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].INACTIVE_API_KEY, message),
    forbidden: (message = "Insufficient permissions")=>createErrorResponse(403, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].FORBIDDEN, message),
    notFound: (message = "Resource not found")=>createErrorResponse(404, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].NOT_FOUND, message),
    validationError: (message = "Validation failed", details)=>createErrorResponse(400, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].VALIDATION_ERROR, message, details),
    rateLimitExceeded: (message = "Rate limit exceeded")=>createErrorResponse(429, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].RATE_LIMIT_EXCEEDED, message),
    internalError: (message = "Internal server error")=>createErrorResponse(500, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ERROR_CODES"].INTERNAL_ERROR, message)
};
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/api-key-utils.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "generateApiKey",
    ()=>generateApiKey,
    "hashApiKey",
    ()=>hashApiKey,
    "isValidApiKeyFormat",
    ()=>isValidApiKeyFormat,
    "maskApiKey",
    ()=>maskApiKey,
    "verifyApiKey",
    ()=>verifyApiKey
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants/api.ts [app-route] (ecmascript)");
;
;
;
function generateApiKey() {
    const prefix = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_KEY_PREFIX"];
    // Generate random data and convert to base64
    // Remove non-alphanumeric characters for clean key format
    const randomPart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_KEY_CONFIG"].RANDOM_BYTES).toString("base64").replace(/[+/=]/g, "") // Remove special characters
    .slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_KEY_CONFIG"].RANDOM_LENGTH); // Take first N characters
    const fullKey = `${prefix}${randomPart}`;
    return {
        fullKey,
        prefix: fullKey.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_KEY_CONFIG"].DISPLAY_PREFIX_LENGTH)
    };
}
function hashApiKey(apiKey) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])("sha256").update(apiKey).digest("hex");
}
function verifyApiKey(apiKey, hashedKey) {
    const computedHash = hashApiKey(apiKey);
    // Use constant-time comparison to prevent timing attacks
    // Both strings should be hex (64 chars for SHA-256)
    if (computedHash.length !== hashedKey.length) {
        return false;
    }
    let result = 0;
    for(let i = 0; i < computedHash.length; i++){
        result |= computedHash.charCodeAt(i) ^ hashedKey.charCodeAt(i);
    }
    return result === 0;
}
function isValidApiKeyFormat(apiKey) {
    const pattern = /^pk_[a-zA-Z0-9]{32,}$/;
    return pattern.test(apiKey);
}
function maskApiKey(apiKey) {
    if (apiKey.length < 16) return "***";
    const prefix = apiKey.slice(0, 8); // "pk_" + first 5 chars
    const suffix = apiKey.slice(-4); // Last 4 chars
    return `${prefix}...${suffix}`;
}
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}),
"[project]/lib/queries/api-key-queries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "findApiKeyByPrefix",
    ()=>findApiKeyByPrefix,
    "updateApiKeyLastUsed",
    ()=>updateApiKeyLastUsed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
;
async function findApiKeyByPrefix(prefix) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].apiKey.findFirst({
        where: {
            prefix,
            isActive: true
        },
        include: {
            user: {
                include: {
                    userRoles: {
                        include: {
                            role: true
                        }
                    }
                }
            }
        }
    });
}
async function updateApiKeyLastUsed(id) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].apiKey.update({
        where: {
            id
        },
        data: {
            lastUsedAt: new Date()
        }
    });
}
}),
"[project]/lib/api-auth-middleware.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "clearApiKeyCache",
    ()=>clearApiKeyCache,
    "getApiContext",
    ()=>getApiContext,
    "getApiKeyCacheStats",
    ()=>getApiKeyCacheStats,
    "validateApiKey",
    ()=>validateApiKey,
    "withApiAuth",
    ()=>withApiAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api-errors.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$key$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api-key-utils.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$api$2d$key$2d$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/queries/api-key-queries.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lru-cache/dist/esm/index.js [app-route] (ecmascript)");
;
;
;
;
const apiKeyCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LRUCache"]({
    max: 50,
    ttl: 1000 * 60 * 5,
    ttlAutopurge: true
});
/**
 * Extract API key from Authorization header
 * Supports: "Bearer <api-key>" or just "<api-key>"
 */ function extractApiKey(request) {
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
        return null;
    }
    // Support both "Bearer <key>" and just "<key>"
    const parts = authHeader.split(" ");
    if (parts.length === 2 && parts[0].toLowerCase() === "bearer") {
        return parts[1];
    }
    // If no "Bearer" prefix, treat entire header as the key
    return authHeader;
}
async function validateApiKey(request) {
    try {
        // Extract API key from Authorization header
        const apiKey = extractApiKey(request);
        if (!apiKey) {
            return null;
        }
        // Validate format
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$key$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isValidApiKeyFormat"])(apiKey)) {
            return null;
        }
        // Check LRU cache
        const cached = apiKeyCache.get(apiKey);
        if (cached) {
            // Update last used timestamp (fire and forget)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$api$2d$key$2d$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateApiKeyLastUsed"])(cached.apiKeyId).catch((error)=>{
                console.error("Failed to update API key last used timestamp:", error);
            });
            return {
                user: {
                    id: cached.userId,
                    email: cached.userEmail,
                    name: cached.userName,
                    roles: cached.roles
                },
                apiKey: {
                    id: cached.apiKeyId,
                    name: cached.apiKeyName,
                    prefix: cached.apiKeyPrefix
                }
            };
        }
        // Extract prefix for database lookup
        const prefix = apiKey.slice(0, 8);
        // Find API key by prefix in database
        const apiKeyRecord = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$api$2d$key$2d$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findApiKeyByPrefix"])(prefix);
        if (!apiKeyRecord) {
            return null;
        }
        // Verify hash
        const isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$key$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verifyApiKey"])(apiKey, apiKeyRecord.key);
        if (!isValid) {
            return null;
        }
        // Build user roles
        const roles = apiKeyRecord.user.userRoles.map((ur)=>({
                id: ur.id,
                userId: ur.userId,
                roleId: ur.roleId,
                role: ur.role,
                assignedAt: ur.assignedAt,
                assignedBy: ur.assignedBy
            }));
        // Cache the result
        apiKeyCache.set(apiKey, {
            apiKeyId: apiKeyRecord.id,
            userId: apiKeyRecord.user.id,
            userName: apiKeyRecord.user.name,
            userEmail: apiKeyRecord.user.email,
            roles,
            apiKeyName: apiKeyRecord.name,
            apiKeyPrefix: apiKeyRecord.prefix,
            validatedAt: Date.now()
        });
        // Update last used timestamp (fire and forget)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$api$2d$key$2d$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateApiKeyLastUsed"])(apiKeyRecord.id).catch((error)=>{
            console.error("Failed to update API key last used timestamp:", error);
        });
        // Return API context
        return {
            user: {
                id: apiKeyRecord.user.id,
                email: apiKeyRecord.user.email,
                name: apiKeyRecord.user.name,
                roles
            },
            apiKey: {
                id: apiKeyRecord.id,
                name: apiKeyRecord.name,
                prefix: apiKeyRecord.prefix
            }
        };
    } catch (error) {
        console.error("Error validating API key:", error);
        return null;
    }
}
function withApiAuth(handler) {
    return async (request)=>{
        // Validate API key
        const context = await validateApiKey(request);
        if (!context) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].unauthorized();
        }
        // Call the actual handler with the context
        try {
            return await handler(request, context);
        } catch (error) {
            console.error("Error in API route handler:", error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].internalError();
        }
    };
}
function clearApiKeyCache(apiKeyId) {
    for (const [key, value] of apiKeyCache.entries()){
        if (value.apiKeyId === apiKeyId) {
            apiKeyCache.delete(key);
        }
    }
}
function getApiKeyCacheStats() {
    return {
        size: apiKeyCache.size,
        max: apiKeyCache.max,
        ttl: apiKeyCache.ttl
    };
}
function getApiContext(request) {
    const userId = request.headers.get("x-api-user-id");
    const userEmail = request.headers.get("x-api-user-email");
    const userName = request.headers.get("x-api-user-name");
    const apiKeyId = request.headers.get("x-api-key-id");
    const apiKeyName = request.headers.get("x-api-key-name");
    const apiKeyPrefix = request.headers.get("x-api-key-prefix");
    const rolesJson = request.headers.get("x-api-user-roles");
    if (!userId || !apiKeyId) {
        throw new Error("API context not found. Ensure middleware authentication is configured.");
    }
    const roles = rolesJson ? JSON.parse(rolesJson) : [];
    return {
        user: {
            id: userId,
            email: userEmail || null,
            name: userName || null,
            roles
        },
        apiKey: {
            id: apiKeyId,
            name: apiKeyName || "",
            prefix: apiKeyPrefix || ""
        }
    };
}
}),
"[project]/lib/api-response.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "createPaginatedResponse",
    ()=>createPaginatedResponse,
    "createSuccessResponse",
    ()=>createSuccessResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
function createSuccessResponse(data, meta) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data,
        ...meta && {
            meta: {
                ...meta,
                timestamp: new Date().toISOString()
            }
        }
    });
}
function createPaginatedResponse(data, pagination) {
    const totalPages = Math.ceil(pagination.total / pagination.limit);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data,
        meta: {
            timestamp: new Date().toISOString(),
            pagination: {
                ...pagination,
                totalPages
            }
        }
    });
}
}),
"[project]/lib/queries/consent-queries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 * 
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 * 
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */ __turbopack_context__.s([
    "findConsentsForValidation",
    ()=>findConsentsForValidation,
    "findProcessingPurposesByPoPCodes",
    ()=>findProcessingPurposesByPoPCodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
;
async function findProcessingPurposesByPoPCodes(codes) {
    const processingPurposes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].processingPurpose.findMany({
        where: {
            purposeOfProcessing: {
                code: {
                    in: codes
                }
            }
        },
        select: {
            publicId: true
        }
    });
    return processingPurposes.map((pp)=>pp.publicId);
}
async function findConsentsForValidation(options) {
    const { dataPrincipalId, referenceId, consentId, processingPurposeIds, statuses = [
        "accepted",
        "revoked"
    ] } = options;
    // Build where conditions
    const whereConditions = {
        status: {
            in: statuses
        }
    };
    // Add identifier-based filtering
    if (dataPrincipalId) {
        whereConditions.dataPrincipalId = dataPrincipalId;
    }
    if (referenceId) {
        whereConditions.referenceId = referenceId;
    }
    if (consentId) {
        whereConditions.publicId = consentId;
    }
    // Add processing purpose filtering if provided
    if (processingPurposeIds && processingPurposeIds.length > 0) {
        whereConditions.processingPurposeId = {
            in: processingPurposeIds
        };
    }
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
        where: whereConditions,
        include: {
            processingPurpose: {
                include: {
                    purposeOfProcessing: true
                }
            },
            businessProcess: {
                select: {
                    code: true,
                    version: true
                }
            },
            consentPurpose: {
                select: {
                    code: true,
                    version: true
                }
            }
        },
        orderBy: {
            insertedAt: "desc"
        }
    });
}
}),
"[project]/app/cms/api/v1/consents/start-access/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$auth$2d$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-auth-middleware.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/api-errors.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$consent$2d$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/queries/consent-queries.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
;
;
;
;
;
const startAccessSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    reference_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(200),
    processing_purpose_codes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1)
});
const formatInIndia = (date)=>date ? new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "medium",
        hour12: true
    }).format(date) : null;
async function POST(request) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$auth$2d$middleware$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getApiContext"])(request);
        const parsed = startAccessSchema.safeParse(await request.json());
        if (!parsed.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].validationError("Invalid request body", parsed.error.issues);
        }
        const processingPurposeIds = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$queries$2f$consent$2d$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findProcessingPurposesByPoPCodes"])(parsed.data.processing_purpose_codes);
        if (processingPurposeIds.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].validationError("No matching processing purposes found");
        }
        const now = new Date();
        const consents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.findMany({
            where: {
                referenceId: parsed.data.reference_id,
                processingPurposeId: {
                    in: processingPurposeIds
                },
                status: "accepted",
                isExpired: false,
                OR: [
                    {
                        expiresAt: null
                    },
                    {
                        expiresAt: {
                            gt: now
                        }
                    }
                ]
            },
            orderBy: {
                insertedAt: "desc"
            }
        });
        if (consents.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].validationError("Consent is missing, revoked, or expired");
        }
        // ACL-APD stores/accepts expiry timestamps at whole-second precision.
        // Normalize here so consents.expires_at and policy.expiry_at are identical.
        const approvalTime = new Date(Math.floor(Date.now() / 1000) * 1000);
        const updatedExpiries = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].$transaction(consents.map((consent)=>{
            const configuredDurationMs = consent.consentDuration ? consent.consentDuration * 60 * 60 * 1000 : null;
            const expiresAt = configuredDurationMs && configuredDurationMs > 0 ? new Date(approvalTime.getTime() + configuredDurationMs) : null;
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].consent.update({
                where: {
                    id: consent.id
                },
                data: {
                    expiresAt
                },
                select: {
                    publicId: true,
                    expiresAt: true
                }
            });
        }));
        const finiteExpiries = updatedExpiries.map((consent)=>consent.expiresAt?.getTime()).filter((expiry)=>typeof expiry === "number");
        const accessExpiresAt = finiteExpiries.length > 0 ? new Date(Math.min(...finiteExpiries)) : null;
        console.info("Consent access approved", {
            reference_id: parsed.data.reference_id,
            provider_approval_time_ist: formatInIndia(approvalTime),
            expires_at_ist: formatInIndia(accessExpiresAt),
            provider_approval_time_utc: approvalTime.toISOString(),
            expires_at_utc: accessExpiresAt?.toISOString() ?? null
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSuccessResponse"])({
            approval_time: approvalTime.toISOString(),
            access_expires_at: accessExpiresAt?.toISOString() ?? null,
            consents: updatedExpiries.map((consent)=>({
                    consent_id: consent.publicId,
                    expires_at: consent.expiresAt?.toISOString() ?? null
                }))
        });
    } catch (error) {
        console.error("Failed to start consent access duration:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApiErrors"].internalError("Failed to start consent access duration");
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ca121f37._.js.map