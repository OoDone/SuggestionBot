/**
 * Language: Russian/Русский (ru_RU)
 * Date: 21/05/2020 (DD/MM/YYYY)
 *
 * Translation by Jarnar (Discord: Jarnar#9709)
 */
export default {

    /**
     * Global part
     *
     * Often used messages which are not necessarily associated with a specific function / implementation
     * are stated below
     */
    insufficientPermissions: "У тебя нет прав для использования этой команды (Тебе нужно права <Permission>)",
    errorTitle: "Ошибка Предложения",
    activeCooldown: "You cannot use that command due to an active cooldown.",
    premiumFeature: "This command is only usable for premium servers (`<Prefix>premium`)",

    /**
     * Commands part
     *
     * Messages associated to commands are stated below
     */
    commands: {
        config: {
            title: "Настройка",
            names: {
                prefix: "Префикс",
                language: "Язык",
                suggestionChannel: "Suggestion Channel",
                reportChannel: "Report Channel",
                autoApprove: "Авто-одобрение",
                autoReject: "Авто-отказ",
                deleteApproved: "Удалить одобренные",
                deleteRejected: "Удалить откзанные"
            },
            prefix: {
                description: "Пожалуйста напишите новый префикс...",
                missingInput: "Вы забыли написать новый префикс.",
                updated: "Префикс обновлён ``<Prefix>``."
            },
            language: {
                description: "Пожалуйста напиште какой язык вы выбрали...",
                availableTitle: "Доступные языки",
                missingInput: "Вы забыли выбрать язык.",
                invalidLanguage: "В Suggestions нету такого языка.",
                updated: "Язык обновлён на ``<Language>``."
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
                description: "Пожалуйста, напишите количество позитивных реакций в цифрах, для одобрения предложения...\n\n*Enter -1 to disable*",
                missingInput: "Вы забыли написать сколько нужно реакций.",
                invalidNumber: "Это неправильна цифра.",
                numberIsTooLow: "Цифра должна быть -1 или выше.",
                updated: "Количесво позитивных реакций для одобрения Предложения теперь ``<Number>``."
            },
            autoReject: {
                description: "Пожалуйста, напишите количество негативных реакций в цифрах, для отказа предложения...\n\n*Enter -1 to disable*",
                missingInput: "Вы забыли написать сколько нужно реакций.",
                invalidNumber: "Это неправильна цифра",
                numberIsTooLow: "Цифра должна быть -1 или выше.",
                updated: "Количесво негативных реакций для отказа Предложения теперь ``<Number>``."
            },
            deleteApproved: {
                description: "Пожалуйста введите **on** или **off**...",
                missingInput: "Вы забыли написать on или off.",
                invalidInput: "Вы можете выбрать только между **on** и **off**.",
                updatedEnabled: "Approved suggestions will now automatically deleted from now on.",
                updatedDisabled: "Approved suggestions won't be automatically deleted from now on."
            },
            deleteRejected: {
                description: "Пожалуста напишите **on** или **off**...",
                missingInput: "Вы забыли написать on или off.",
                invalidInput: "Вы можете выбрать только между **on** и **off**.",
                updatedEnabled: "Rejected suggestions will now automatically deleted from now on.",
                updatedDisabled: "Rejected suggestions won't be automatically deleted from now on."
            }
        },
        suggest: {
            title: "Suggestions - Предложение",
            invalidChannel: "Убедитесь в том что Администратор сервера, настроил бота правильно!",
            descriptionRequired:"Пожалуйста опишите свою идею!",
            description: "**Описание:** <Description>\n\n**Статус:** <Status>\n**ID:** <ID>",
            sent: "Предложение успешно добавлено! ([Нажать](<Url>))"
        },
        report: {
            title: "Suggestions - Report",
            invalidChannel: "Please make sure that the owner of the server configured the bot properly.",
            descriptionRequired: "Please fill in a description.",
            description: "**Description:** <Description>\n\n**Status:** <Status>\n**ID:** <ID>",
            sent: "Your report was succesfully sent."
        },
        approve: {
            title: "Suggestions - Одобрение",
            descriptionRequired: "Пожалуйста напишите ID предложения.",
            invalidInput: "Вы ввели неправильный ID предложения.",
            noSuggestionsFound: "Я не могу найти больше предложений, которые можно одобрить.",
            approved: "Предложение Одобренно."
        },
        reject: {
            title: "Suggestions - Отказ",
            descriptionRequired: "Пожалуйста напишите ID предложения.",
            invalidInput: "Вы ввели неправильный ID предложения.",
            noSuggestionsFound: "Я не могу найти больше предложений, которые можно откозать.",
            rejected: "Предложению Отколонено/Откзано."
        },
        list: {
            title: "Suggestions - Лист",
            noSuggestions: "Нет ни одно открытого предложения на сервере.",
            description: "Вы можете посмотреть все открытые предложения ниже.",
            suggestionDescription: "**Описание:** <Description>\n**ID:** <ID>\n**Ссылка:** [Нажать](<Url>)"
        },
        uptime: {
            title: "Suggestions - Время работы",
            description: "Я в онлайнже <Days> дней, <Hours> часов, <Minutes> минут и <Seconds> секунд!"
        },
        help: {
            title: "Suggestions - Помощь",
            commandTitle: "Команда помощи",
            serverTitle: "Сервер поддержки"
        },
        vote: {
            title: "Suggestions - Голосовать"
        },
        reportbug: {
            title: "Suggestions - Reportbug",
            descriptionRequired: "Пожалуйста, опишите что за баг вы нашли.",
            confirmation: "Are you sure you want to report the bug to the developers of the bot?",
            cancelled: "Successfully cancelled the bug report.",
            sent: "Репорт отправлен разработчикам.\n\n*Спасибо за письмо!*"
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
        open: "Открыть",
        approved: "Одобрить",
        rejected: "Отказать"
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