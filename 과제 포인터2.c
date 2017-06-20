#include <stdio.h>

int main()
{
	int a[5] = {1, 2, 3, 4, 5};
	int *p = a[4];
	int i;
	
	for(i=1; i <= 5; i++)
	{
		*p += *(p+i);
	}
	printf("%d", p);
}
