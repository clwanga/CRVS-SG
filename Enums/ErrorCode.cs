namespace CRVS_SG.Enums
{
    public enum ErrorCode
    {
        Success = 200,
        DataValidationError = 501,
        GeneralFailure = 500,
        SQLInsertError = 502,
        SQLUpdateError = 503,
        SQLDeleteError = 504,
        SQLViewError = 505,
        SQLRecordNotExists = 506,
        SessionExpired = 507,
        DBSessionExpired = 508,
        ObjectAlreadyExist = 509
    }
}
