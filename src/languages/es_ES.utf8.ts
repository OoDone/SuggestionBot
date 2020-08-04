/**
 * Language: Spanish / Español (es_ES)
 * Date: 12/07/2020 (MM/DD/YYYY)
 *
 * Translation by Krak798 (Discord: ҠЯѦҞ7̴̑̿9̵̆̉8̸̥͠#4342)
 */
export default {

    /**
     * Global part
     *
     * Often used messages which are not necessarily associated with a specific function / implementation
     * are stated below
     */
    insufficientPermissions: "¡No tienes permiso para utilizar ese comando! (El permiso <Permission> es obligatorio)",
    errorTitle: "Suggestions - Error",
    activeCooldown: "You cannot use that command due to an active cooldown.",
    premiumFeature: "This command is only usable for premium servers (`<Prefix>premium`)",

    /**
     * Commands part
     *
     * Messages associated to commands are stated below
     */
    commands: {
        config: {
            title: "Suggestions - Configuración",
            names: {
                prefix: "Prefijo",
                language: "Lengua",
                suggestionChannel: "Suggestion Channel",
                reportChannel: "Report Channel",
                autoApprove: "Auto aprobar",
                autoReject: "Auto rechazar",
                deleteApproved: "Eliminar aprobados",
                deleteRejected: "Eliminar rechazados"
            },
            prefix: {
                description: "Por favor introduzca el nuevo prefijo...",
                missingInput: "Has olvidado introducir el nuevo prefijo.",
                updated: "El prefijo se ha establecido a``<Prefix>``."
            },
            language: {
                description: "Por favor, introduzca la nueva lengua...",
                availableTitle: "Lenguas disponibles",
                missingInput: "Has olvidado introducir la lengua nueva.",
                invalidLanguage: "Suggestions no está disponible en esa lengua.",
                updated: "La lengua ha sido cambiada a ``<Language>``."
            },
            suggestionChannel: {
                description: "Please enter a new channel...",
                missingInput: "You forgot to enter a new channel.",
                invalidChannel: "You entered an invalid channel.",
                updated: "Updated the channel to <#<ChannelID>>."
            },
            reportChannel: {
                description: "Please enter a new channel...",
                missingInput: "You forgot to enter a new channel.",
                invalidChannel: "You entered an invalid channel.",
                updated: "Updated the channel to <#<ChannelID>>."
            },
            autoApprove: {
                description: "Por favor, introduzca cantidad necesaria de reacciones positivas para aprobar la sugerencia...\n\n*Introduzca -1 para deshabilitar*",
                missingInput: "Has olvidado introducir el número de reacciones necesarias.",
                invalidNumber: "Ese no es un número válido.",
                numberIsTooLow: "El número debe ser -1 o superior.",
                updated: "La cantidad necesaria de reacciones positivas para auto probar es ahora ``<Number>``."
            },
            autoReject: {
                description: "Por favor, introduzca cantidad necesaria de reacciones negativas para rechazar la sugerencia...\n\n*Introduzca -1 para deshabilitar*",
                missingInput: "Has olvidado introducir el número de reacciones necesarias.",
                invalidNumber: "Ese no es un número válido.",
                numberIsTooLow: "El número debe ser -1 o superior.",
                updated: "La cantidad necesaria de reacciones positivas para auto rechazar es ahora ``<Number>``."
            },
            deleteApproved: {
                description: "Por favor, seleccione **on** u **off**...",
                missingInput: "Has olvidado seleccionar entre **on** y **off**.",
                invalidInput: "Solo puedes seleccionar entre **on** u **off**.",
                updatedEnabled: "Approved suggestions will now automatically deleted from now on.",
                updatedDisabled: "Approved suggestions won't be automatically deleted from now on."
            },
            deleteRejected: {
                description: "Por favor, seleccione **on** u **off**...",
                missingInput: "Has olvidado seleccionar entre **on** y **off**.",
                invalidInput: "Solo puedes seleccionar entre **on** u **off**.",
                updatedEnabled: "Rejected suggestions will now automatically deleted from now on.",
                updatedDisabled: "Rejected suggestions won't be automatically deleted from now on."
            }
        },
        suggest: {
            title: "Suggestions - Sugerencia",
            invalidChannel: "Por favor, confirma que el dueño del servidor haya configurado correctamente el servidor.",
            descriptionRequired: "Por favor, danos una descripción de la sugerencia que quieres sugerir.",
            description: "**Descripción:** <Description>\n\n**Estado:** <Status>\n**ID:** <ID>",
            sent: "Tu sugerencia ha sido creada correctamente! ([Click aquí](<Url>))"
        },
        report: {
            title: "Suggestions - Report",
            invalidChannel: "Please make sure that the owner of the server configured the bot properly.",
            descriptionRequired: "Please fill in a description.",
            description: "**Description:** <Description>\n\n**Status:** <Status>\n**ID:** <ID>",
            sent: "Your report was succesfully sent."
        },
        approve: {
            title: "Suggestions - Aprobar",
            descriptionRequired: "Por favor, introduzca una ID válida.",
            invalidInput: "Has introducido una ID no válida.",
            noSuggestionsFound: "No puedo encontrar ninguna sugerencia aprobable.",
            approved: "He completado el aprobado correctamente."
        },
        reject: {
            title: "Suggestions - Rechazar",
            descriptionRequired: "Por favor, introduzca una ID válida.",
            invalidInput: "Has introducido una ID no válida.",
            noSuggestionsFound: "No puedo encontrar ninguna sugerencia rechazable.",
            rejected: "He completado el rechazo correctamente."
        },
        list: {
            title: "Suggestions - Lista",
            noSuggestions: "No hay ninguna sugerencia abierta para este servidor.",
            description: "Puedes ver todas la sugerencias abiertas aquí abajo.",
            suggestionDescription: "**Descripción:** <Description>\n**ID:** <ID>\n**Enlace:** [Click aquí](<Url>)"
        },
        uptime: {
            title: "Suggestions - Tiempo de funcionamiento",
            description: "He estado funcionando durante <Days> días, <Hours> horas, <Minutes> minutos y <Seconds> segundos!"
        },
        help: {
            title: "Suggestions - Ayuda",
            commandTitle: "Ayuda sobre los comandos",
            serverTitle: "Servidor de soporte"
        },
        vote: {
            title: "Suggestions - Votación"
        },
        reportbug: {
            title: "Suggestions - Reporte de error",
            descriptionRequired: "Por favor, danos una descripción del error o problema.",
            confirmation: "Are you sure you want to report the bug to the developers of the bot?",
            cancelled: "Successfully cancelled the bug report.",
            sent: "Tu reporte ha sido enviado a los desarrolladores del bot.\n\n*Gracias por sumisión!*"
        },
        premium: {
            title: "Suggestions - Premium",
            description: "Whenever you buy premium you'll get access to the perks below. Premium is per server and requires a one-time payment of $2.50. This will allow our developers to continue working on Suggestions and our other projects.",
            perksTitle: "Premium Perks",
            perksDescription: "1. Early access to beta features.\n2. Priority support.\n3. A premium rank in the CodedSnow discord server."
        },
        translation: {
            title: "Suggestions - Translation",
            description: "If you're looking for changing Suggestion's language, please use `<Prefix>config`.\n\nFor more information about contributing a language please read the field below.",
            contributeTitle: "Contribute",
            contributeDescription: "We are always looking for people to translate our bot. If you would like the translate the bot in a language or if you want to make changes to a language please read the instructions about translating over on our [github page](https://github.com/jerskisnow/Suggestions/tree/dev)."
        }
    },

    /*
     * Suggestions part
     *
     * Words associated with suggestions are stated below
     */
    suggestions: {
        open: "Abierta",
        approved: "Aprovada",
        rejected: "Rechazada"
    },

    /*
     * Reports part
     *
     * Words associated with reports are stated below
     */
    reports: {
        open: "Open",
        resolved: "Resolved"
    }

}
