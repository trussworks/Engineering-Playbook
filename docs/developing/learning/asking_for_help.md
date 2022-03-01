# [Learning Resources](./README.md) / "Asking For Help"

When learning, it is expected one will encounter situations where you
need help. *How* you ask for help is an important skill to develop.

How you ask for help is very similar to how to submit a bug report. In
particular, you want to stick to the facts. Stay away from speculating
about why you are having the problem.

1. Explain what you are trying to do
1. Explain what you tried
1. Explain what you expected to see
1. Explain what happened instead
1. Explain what you searched for to try to solve the problem

## Bad Example

I have memory corruption when I try to run my program

## Good Example

I am trying to capture the output of the "ls" command.

I am trying to run this program:

```
package main

import (
    "fmt"
    "os"
    "os/exec"
)

func main() {
    out, err := exec.Command("ls").Output()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error running ls: %s\n", err)
        os.Exit(1)
    }
    fmt.Println(out)
}
```

I invoke it with `go run prog.go`

I expect it to show `prog.go`

Instead, it prints `[112 114 111 103 46 103 111 10]`

I searched for how to print in go, but I didn't understand how to use
the format strings.
