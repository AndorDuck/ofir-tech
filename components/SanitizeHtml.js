import sanitizeHtml from "sanitize-html";

export default function SanitizeHtml({html, className}) {
    const sanitizedHtml = sanitizeHtml(html, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'center' ]),
        allowedAttributes: {
            'p': ["style"],
            'h1': ["style"],
            'h2': ["style"],
            'h3': ["style"],
            'h4': ["style"],
            'h5': ["style"],
            'h6': ["style"],
        },
        allowedStyles: {
            '*': {
                'text-align': [/^left$/, /^right$/, /^center$/]
            }
        }
    })
    
    return (
        <div dangerouslySetInnerHTML={{__html: sanitizedHtml}}></div>
    )
}