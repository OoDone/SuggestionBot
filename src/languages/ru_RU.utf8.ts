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
                channel: "Канал",
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
            channel: {
                description: "Пожалуйста, напишите канал...",
                missingInput: "Вы забыли написать канал.",
                invalidChannel: "Вы написали несуществующий канал.",
                updated: "Канал обновлён на <#<ChannelID>>."
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
                updated: "Одобренные предложения будет удалены автоматически."
            },
            deleteRejected: {
                description: "Пожалуста напишите **on** или **off**...",
                missingInput: "Вы забыли написать on или off.",
                invalidInput: "Вы можете выбрать только между **on** и **off**.",
                updated: "Отказанные предложения будут удалены автоматически."
            }
        },
        suggest: {
            title: "Suggestions - Предложение",
            invalidChannel: "Убедитесь в том что Администратор сервера, настроил бота правильно!",
            descriptionRequired:"Пожалуйста опишите свою идею!",
            description: "**Описание:** <Description>\n\n**Статус:** <Status>\n**ID:** <ID>",
            sent: "Предложение успешно добавлено! ([Нажать](<Url>))"
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
            sent: "Репорт отправлен разработчикам.\n\n*Спасибо за письмо!*"
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
    }

}