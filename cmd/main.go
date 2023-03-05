package main

import (
	"fmt"

	"github.com/spf13/cobra"
)

var (
	rootCmd = &cobra.Command{
		Use:   "blog",
		Short: "a tool to init the blogs",
	}
)

func init() {
	rootCmd.AddCommand(CreateCmd)
}

func main() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Printf("💢Failed with %s", err)
	} else {
		fmt.Printf("👍Done")
	}
}

type blog struct {
	title    string
	filename string
	year     int
}

func listBlogs() []*blog {
	return nil
}

func updateSidebar(include, exclude string) {

}
