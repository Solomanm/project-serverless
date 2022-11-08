import * as AWS from 'aws-sdk'
const AWSXRay  = required('aws-xray-sdk')

const XAWS = AWSXRay.captureAWS(AWS)
const s3  = new XAWS.s3({
    signatureVersion: 'v4'
})
const bucketname = process.env.ATTACHMENT_S3_BUCKET
// TODO: Implement the fileStogare logic
export function getUploadUrl(imageId: string){
    return s3.getSignedUrl('putObject',{
        bucket: bucketname,
        key: imageId,
        Expires: 300
    })
}