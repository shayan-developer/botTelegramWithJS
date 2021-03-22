const youtubedl = require('youtube-dl-exec')

module.exports.downloader = (link) => {
    youtubedl(link, {
        dumpJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true,
        referer: link
    })
        .then(output => console.log(output))
}