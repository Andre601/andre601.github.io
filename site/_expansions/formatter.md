---
permalink: /expansions/formatter/

title: "Formatter"
excerpt: "Format numbers and text in various ways."

toc: true
---

# About
The formatter Expansion allows you to format both numbers and text in various ways.  
If you, for example, want to turn seconds into hours, minutes, etc. can you use `%formatter_number_time_<seconds>%` to get the provided `<seconds>` (i.e. `100`) as time in hours, minutes, etc (`1d 40s`).

## Placeholders

### Numbers
- `%formatter_number_format_<number>%`
- `%formatter_number_format_[locale]:[format]_<number>%`*
- `%formatter_number_time_<number>%`
- `%formatter_number_time_secons_<number>%`
- `%formatter_number_time_secs_<number>%`
- `%formatter_number_time_minutes_<number>%`
- `%formatter_number_time_mins_<number>%`
- `%formatter_number_time_hours_<number>%`
- `%formatter_number_time_hrs_<number>%`

> **Notes:**  
> Both `[locale]` and `[format]` can be left blank to use whatever value is set in the config of PlaceholderAPI.  
> Please see the [Oracle Javadocs](https://docs.oracle.com/javase/7/docs/api/java/text/DecimalFormat.html) for the syntax of `[format]` and [the wiki](https://wiki.powerplugins.net/wiki/formatter-expansion/) for the `[locale]` syntax.
{: .notice--info }

### Text
- `%formatter_text_lowercase_<text>%`
- `%formatter_text_replace_<target>_<replacement>_<text>%`
- `%formatter_text_substring_[start]:[end]_<text>%`
- `%formatter_text_uppercase_<text>%`

> **Notes:**  
> - `<replacement>` can be left empty to essentially remove `<target>` in the text.
> - To use underscrores (`_`) as `<target>` or `<replacement>` will you need to use `{{u}}` instead.
> - `[start]` is zero-indexed (Starts at 0) while `[end]` is not (Starts at 1).
> - You can leave both `[start]` and `[end]` empty to use the very start and the very end of the text respectively.

## Links

[<i class="fas fa-cloud-download-alt"></i> Download](https://api.extendedclip.com/expansions/formatter){: .btn .btn--info }  
[<i class="fab fa-github"></i> Source Code](https://github.com/Andre601/Formatter-Expansion){: .btn .btn--info }