const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

exports.s3Upload = async (file) => {
    const s3Client = new S3Client({
        region: "ap-south-1",
        credentials: {

        }
    })

    const command = new PutObjectCommand({
        Bucket: 'llm-platform-ui',
        Key: `${Date.now()}-${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype
    })

    try {
        const uploadResult = await s3Client.send(command);
        return uploadResult;
    } catch (err) {
        console.error('Error uploading file:', err);
        throw err;
    }
}