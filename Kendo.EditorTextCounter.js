/// <version>1.0</version>
/// <summary>
//      Copyright 2014 - tomthorp@mail.com
/// Works with the Kendo UI 2013 Q1 and jQuery 1.9.1</summary>

(function ($, undefined) {
    var kendo = window.kendo,
        ui = kendo.ui,
        Widget = ui.Widget;

    var extEditorTextCounter = Widget.extend({

        init: function (element, options) {
            var that = this;
            var temp;
            
            Widget.fn.init.call(that, element, options);
            options = that.options;

            if (!options.textAreaName || options.textAreaName.length == 0) {
                throw 'Undefined TextArea Name Options Parameter';
            }

            var textArea = $(options.textAreaName);


            if (!options.maxlength || options.maxlength == 0) {
                // check to see if length is specified in tag
                if (options.maxLengthAttribute) {
                    temp = textArea.attr(options.maxLengthAttribute);
                } else {
                    temp = textArea.attr('maxlength');
                }
                if (temp) {
                    options.maxlength = parseInt(temp);
                }
            }

            var template = {};
            if (options.template) {
                template = kendo.template(options.template);
            } else {
                if (options.showNofMFmt) {
                    template = kendo.template('#=  numberChars # characters used of  #= maxLength  #');
                } else {
                    if (options.maxlength == 0) {
                        template = kendo.template('Characters Used: #= numberChars #');
                    } else {
                        template = kendo.template('Characters Remaining: #= remainingChars #');
                    }
                }
            }

            // bind to  keyup event handler
            var editor = textArea.data("kendoEditor");
            editor.bind("keyup", function (e) {
                var that = this;
                var valueText = this.value();

                var dataVars = {
                    numberChars: valueText.length,
                    remainingChars: (options.maxlength - valueText.length),
                    maxLength: options.maxlength
                }

                if (options.maxlength > 0) {
                    var percentageUsed = (100 * dataVars.numberChars) / options.maxlength;
                    if (percentageUsed >= options.warningPercentage) {
                        targetDomElement.addClass(options.warningCssClass);
                    } else {
                        targetDomElement.removeClass(options.warningCssClass);
                    }
                }

                targetDomElement.text(template(dataVars));
            });


        },
        options: {
            name: 'extEditorTextCounter',
            textAreaName: '',
            maxlength: 0,
            maxLengthAttribute: 'maxlength',
            showNofMFmt: false,
            template: '',
            warningPercentage: 90,
            warningCssClass: 'k-textCounterWarning '

        }
    });

    ui.plugin(extEditorTextCounter);
})(jQuery);

